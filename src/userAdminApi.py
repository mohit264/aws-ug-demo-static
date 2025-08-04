"""
User Administration API
"""
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from src.database import get_db
from src.models import User
from src.schemas import UserCreate, UserUpdate, UserResponse
from src.crud import user as user_crud

def userAdminApi
    """User Administration API Router"""
    router = APIRouter()

    @router.post("/users/", response_model=UserResponse)
    def create_user(user: UserCreate, db: Session = Depends(get_db)):
        """Create a new user"""
        db_user = user_crud.create_user(db=db, user=user)
        if not db_user:
            raise HTTPException(status_code=400, detail="User already exists")
        return db_user