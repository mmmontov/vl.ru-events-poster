from pydantic import BaseModel

class EventCreate(BaseModel):
    name: str
    tags: str
    date: str
    cost: int
    place: str
    coordinates: str
    description: str
    age_rating: int
    image_path: str
    
    
class TagCreate(BaseModel):
    name: str