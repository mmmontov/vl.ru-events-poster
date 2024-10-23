from sqlalchemy import MetaData, Integer, String, TIMESTAMP, ForeignKey, Table, Column
import datetime

from src.database import metadata

tags = Table(
    'tags',
    metadata,
    Column("id", Integer, primary_key=True),
    Column("name", String, nullable=False),
)


events = Table(
    'events',
    metadata,
    Column("id", Integer, primary_key=True),
    Column("name", String, nullable=False),
    Column("tags", String, nullable=False), # Integer, ForeignKey('tags.id')
    Column("date", String, nullable=False),
    Column("cost", Integer, nullable=False),
    Column("place", String, nullable=False),
    Column("coordinates", String, nullable=False),
    Column("description", String, nullable=False),
    Column("likes", Integer, default=0),
    Column("dislikes", Integer, default=0),
    Column("age_rating", Integer, nullable=False),
    Column("image_path", String, nullable=False),
)




