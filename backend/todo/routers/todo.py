from fastapi import APIRouter, Depends, status, HTTPException
from .. import schemas, database, models
from typing import List
from sqlalchemy.orm import Session

router = APIRouter()


@router.post('/todo', status_code=status.HTTP_201_CREATED, tags=['todo'])
def create(request: schemas.Todo, db: Session = Depends(database.get_db)):
    new_todo = models.Todo(
        todo=request.todo, is_completed=request.is_completed)
    db.add(new_todo)
    db.commit()
    db.refresh(new_todo)
    return new_todo


@router.get('/todo', response_model=List[schemas.ShowTodo], tags=['todo'])
def all(db: Session = Depends(database.get_db)):
    todos = db.query(models.Todo).all()
    return todos


@router.get('/todo/{id}', response_model=schemas.ShowTodo, tags=['todo'])
def show(id: int, db: Session = Depends(database.get_db)):
    todo = db.query(models.Todo).filter(models.Todo.id == id).first()
    if not todo:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f'todo with id {id} is not available')
    return todo


@router.delete('/todo/{id}', status_code=status.HTTP_204_NO_CONTENT, tags=['todo'])
def delete(id: int, db: Session = Depends(database.get_db)):
    todo = db.query(models.Todo).filter(models.Todo.id == id)
    if not todo.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f'task with id {id} not available')
    db.delete(synchronize_session=False)
    db.commit()
    return 'deleted successfully'


@router.put('/todo/{id}', status_code=status.HTTP_202_ACCEPTED, tags=['todo'])
def update(id: int, db: Session = Depends(database.get_db)):
    todo = db.query(models.Todo).filter(models.Todo.id == id)
    if not todo.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f'todo with id {id} not available')
    is_completed_status = todo.first().is_completed
    todo.update({models.Todo.is_completed: not is_completed_status},
                synchronize_session=False)
    db.commit()
    return 'updated successfully'
