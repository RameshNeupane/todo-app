from fastapi import APIRouter, Depends, status, HTTPException
from .. import schemas, database, models
from sqlalchemy.orm import Session
from passlib.context import CryptContext


pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')


router = APIRouter()


@router.post('/user', status_code=status.HTTP_201_CREATED, response_model=schemas.ShowUser, tags=['user'])
def create_user(request: schemas.User, db: Session = Depends(database.get_db)):
    hashed_pwd = pwd_context.hash(request.password)
    new_user = models.User(
        name=request.name, email=request.email, password=hashed_pwd)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


@router.get('/user/{id}', status_code=status.HTTP_200_OK, response_model=schemas.ShowUser, tags=['user'])
def show_user(id: int, db: Session = Depends(database.get_db)):
    user = db.query(models.User).filter(models.User.id == id).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f'user with id {id} not available')
    return user
