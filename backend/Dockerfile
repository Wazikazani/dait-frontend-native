FROM python:3.10
COPY api /api
COPY requirements.txt /api/requirements.txt
WORKDIR /api
RUN pip install -r requirements.txt
ENTRYPOINT [ "gunicorn", "api.wsgi", "--bind=0.0.0.0:8080"]