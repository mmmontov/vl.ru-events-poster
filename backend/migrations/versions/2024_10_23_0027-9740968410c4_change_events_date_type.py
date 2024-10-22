"""change events[date] type

Revision ID: 9740968410c4
Revises: 1d4095b1374f
Create Date: 2024-10-23 00:27:32.499725

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = '9740968410c4'
down_revision: Union[str, None] = '1d4095b1374f'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('events', 'date',
               existing_type=postgresql.TIMESTAMP(),
               type_=sa.String(),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('events', 'date',
               existing_type=sa.String(),
               type_=postgresql.TIMESTAMP(),
               existing_nullable=False)
    # ### end Alembic commands ###
