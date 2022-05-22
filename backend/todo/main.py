from fastapi import FastAPI
from . import database, models
from .routers import todo, user, info

from fastapi.middleware.cors import CORSMiddleware


models.Base.metadata.create_all(bind=database.engine)


app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(todo.router)
app.include_router(user.router)
app.include_router(info.router)
