#Pytest Assignment

Automated the below test scenarios in pytest

Covered the endpoints top-rated-movies & rate-movie
###Test Scenarios

1. Get top rated movies(expected response-OK)
2. Get top rated movies with incorrect API 
key(expected response-Unauthorized)
3. Get top rated movies with invalid page filter(expected response-unprocessable_entity)
4. Get top rated movie with invalid resource(expected response-not found)
5. Get movie detail by id (expected response - OK)
6. Get movie detail by invalid id(expected response - not found)
7. Post rating for movie(expected respone - OK)

Note: Post request not working(so could not cover testcases for rate movie endpoint)

###File structure
  lib -> api_calls.py - contains methods for making api calls
  tests -> test_api.py - contains testcases for endpoints
  config.ini -> contains url and api keys 
  pytest.ini -> contains pytest configuration
