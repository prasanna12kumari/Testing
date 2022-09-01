#Cypress Assignment

Automated the testcases related to login functionality of bynder portal


###Test Scenarios

1. Login to portal using correct username and password and logout
2. Login to portal using incorrect password and verify error message
3. Login to portal with empty username and password
4. verify lost password link navigation

Note: Attached screenshots in "tesrun_screenshots" folder

Run tests in container using the below command

cd CYPRESS_ASSIGNMENT/

docker run -it -v $PWD:/e2e -w /e2e -e CYPRESS_VIDEO cypress/included:8.5.0
