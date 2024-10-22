from sqlalchemy import MetaData, Integer, String, TIMESTAMP, ForeignKey, Table, Column
import datetime

metadata = MetaData()

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
    Column("tags", Integer, ForeignKey('tags.id')),
    Column("date", TIMESTAMP, default=datetime.datetime.now(datetime.timezone.utc), nullable=False),
    Column("cost", Integer, nullable=False),
    Column("place", String, nullable=False),
    Column("coordinates", String, nullable=False),
    Column("description", String, nullable=False),
    Column("likes", Integer, default=0),
    Column("dislikes", Integer, default=0),
    Column("age_rating", Integer, nullable=False),
    Column("image_path", String, nullable=False),
)

users = Table(
    'users',
    metadata,
    Column("id", Integer, primary_key=True),
    Column("name", String, nullable=False),
    Column("phone_number", String, nullable=False),
    Column("email", String),
    Column("password", String, nullable=False),
    Column("age", Integer, nullable=False),
    Column("tickets", Integer, ForeignKey('events.id')),
    Column("likes", Integer, ForeignKey('events.id')),
    Column("recomendations", String),

)


