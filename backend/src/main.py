from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi_users import FastAPIUsers, fastapi_users

from src.auth.base_config import auth_backend, fastapi_users
from src.auth.schemas import UserRead, UserCreate
from src.main_page.router import router as router_main
from src.auth.models import Users
from src.auth.manager import get_user_manager

app = FastAPI()

app.include_router(router_main)


origins = [
    "http://localhost:8080",
    "http://127.0.0.1:8080",
    
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



app.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix="/auth",
    tags=["Auth"],
)

app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
    tags=["Auth"],
)


current_user = fastapi_users.current_user(optional=True)

@app.get("/protected-route")
def protected_route(user: Users = Depends(current_user)):
    if user:
        return {
            "id": user.id,
            "email": user.email,
            "recomendations": user.recomendations
        }
    else:
        return {"User": None}

@app.get("/unprotected-route")
def unprotected_route():
    return f"Hello, enemy"

