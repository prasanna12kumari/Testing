
import configparser
from requests import codes
from Assignment.lib.api_calls import APIEndpoint
import pytest

@pytest.fixture(scope='session')
def config():
    config = configparser.ConfigParser()
    config.read("D:\\python_practice\\Assignment\\config.ini")
    return config

@pytest.fixture(scope='session')
def context():
    context = APIEndpoint()
    return context

def test_get_top_rated_movies(context,config):
    url = config.get('LOGIN','URL')
    response=context.get_top_rated_movies(url)
    assert response.status_code == codes.ok

def test_incorrect_url(context,config):
    url = config.get('LOGIN','incorrectApiKey')
    response=context.get_top_rated_movies(url)
    assert response.status_code == codes.unauthorized

def test_invalid_page_filter(context,config):
    url = config.get('LOGIN','incorrectPageFilter')
    response=context.get_top_rated_movies(url)
    assert response.status_code == codes.unprocessable_entity

def test_get_invalid_resource(context,config):
    url = config.get('LOGIN','incorrectURL')
    response=context.get_top_rated_movies(url)
    assert response.status_code == codes.not_found

def test_get_movie_detail_by_id(context,config):
    url = config.get('LOGIN','URL')
    movie_id_list=context.get_movie_id_list(url)
    print(movie_id_list)
    response = context.get_movie_details(movie_id_list[0])
    assert response.status_code == codes.ok

def test_get_movie_by_invalid_id(context,config):
    response=context.get_movie_details("-12")
    assert response.status_code == codes.not_found

def test_rate_movie(context,config):
    url = config.get('LOGIN','URL')
    movie_id_list=context.get_movie_id_list(url)
    response = context.rate_movie(movie_id_list[0],"8.5")
    print(response.text)
    assert response.status_code == codes.ok



    


