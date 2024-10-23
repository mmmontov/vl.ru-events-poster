from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, insert

from src.database import get_async_session
from src.main_page.mdels import events, tags
from src.main_page.schemas import TagCreate, EventCreate
from src.auth.base_config import current_user
from src.auth.models import Users


router = APIRouter(
    prefix='/afisha',
    tags=['afisha']
)

@router.get("/")
async def get_all_events(limit: int = 5, session: AsyncSession = Depends(get_async_session)):
    query = select(events).limit(limit)
    result = await session.execute(query)
    return result.mappings().all()

@router.post("/add_event")
async def add_event(new_event: EventCreate, session: AsyncSession = Depends(get_async_session)):
    stmt = insert(events).values(**new_event.model_dump())
    await session.execute(stmt)
    await session.commit()
    return {"status": new_event.name}


@router.post("/add_tag")
async def add_tag(new_tag: TagCreate, session: AsyncSession = Depends(get_async_session)):
    stmt = insert(tags).values(**new_tag.model_dump())
    await session.execute(stmt)
    await session.commit()
    return {"created": new_tag.name}



@router.get("/main_page")
async def get_main_page(events_limit: int = 20, user: Users = Depends(current_user), session: AsyncSession = Depends(get_async_session)):
    query_events = select(events).limit(events_limit).order_by(events.c.likes)
    events_res = await session.execute(query_events)
    query_tags = select(tags)
    tags_res = await session.execute(query_tags)
    await session.commit()
    return {
        "events": events_res.mappings().all(),
        "tags": tags_res.mappings().all(),
        "user": {
            user.id,
            user.email
        } if user else None
    }


