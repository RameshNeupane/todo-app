from .database import Base
from sqlalchemy import Column, Integer, String, Boolean


class Todo(Base):
    __tablename__ = 'todos'

    id = Column(Integer, primary_key=True)
    todo = Column(String)
    is_completed = Column(Boolean)


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)
    password = Column(String)
