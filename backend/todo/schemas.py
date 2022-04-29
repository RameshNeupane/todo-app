from pydantic import BaseModel
from typing import Optional


class Todo(BaseModel):
    todo: str
    is_completed: Optional[bool] = False


class ShowTodo(Todo):
    id: int

    class Config():
        orm_mode = True


class User(BaseModel):
    name: str
    email: str
    password: str


class ShowUser(BaseModel):
    id: int
    name: str
    email: str

    class Config():
        orm_mode = True
