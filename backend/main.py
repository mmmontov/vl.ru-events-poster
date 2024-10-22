from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from main_page.router import router as router_main

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

@app.get("/hello")
async def hello():
    return {"hello": "world"}

