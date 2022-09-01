
import configparser

import requests


class APIEndpoint:
    def __init__(self):
        config = configparser.ConfigParser()
        config.read("./config.ini")
        self.api_key=config.get('LOGIN','apiKey')
        self.base_url= config.get('LOGIN','baseUrl')

    def get_top_rated_movies(self,url):
        response = requests.get(
            url
        )
        return response

    def get_movie_id_list(self,url):
        movies_id_list = []
        response=self.get_top_rated_movies(url)
        response_data= response.json()
        for movie in response_data['results']:
            movies_id_list.append(movie['id'])
        return movies_id_list

    def get_movie_details(self,movie_id):
        response = requests.get(f"{self.base_url}/movie/{movie_id}?api_key={self.api_key}")
        return response

    def rate_movie(self,movie_id,rating):
        url=f"{self.base_url}movie/{movie_id}/rating?api_key={self.api_key}"
        headers = {'Content-type': 'application/json;charset=utf-8'}
        payload={
            "value": f"{rating}"
        }
        response = requests.post(url,headers=headers,data=payload)
        return response

