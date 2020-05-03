FROM ubuntu:latest
RUN apt-get update -y
RUN sudo add-apt-repository universe
RUN apt-get install -y python-pip python-dev build-essential
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
RUN pytest ./tests
ENTRYPOINT ["python"]
CMD ["app.py"]
