FROM python:3.11.7

RUN mkdir /vlru_app

WORKDIR /vlru_app

COPY req.txt .

RUN pip install -r req.txt

COPY . .

# CMD gunicorn src.main:app --workers 4 --worker-class uvicorn.workers.UvicornWorker --bind=0.0.0.0:8000
 
