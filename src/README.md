# 

# DB Architecture

the architecture was built taking into consideration two factors , the first is code *readability* and the second
is *query speed and writing speed* ,
the first of those decisions was linking the user with the profile with one to one relationship , considering
the fact that having them in one table would cause less readable code and more complications due to the 
jamming of the methods of both models in the same file. then all the other relations were taking speed into consideration, the foreign keys for media and business photos were added on the models themselves , to cause less
column repetition for the business Model 


# functions and Coding

the whole app module is divided into three main modules , *user* , *profile* and *business* , some patterns were 
followed with the naming , all the resolver functions are named with the present continuous tense like 
```python
creatingTable # used for creatig the schema 
addingPhotos # adding photos to business
```
 meanwhile all the services functions are create using the present tense like 
```python
createTable
```
, the user model has four function , 
```python
createUser # to create users in the Sequelize database 
```
```python
getUsers #to get all the users in the database and
``` 
```python
findUser #to find a specific user from the database 
```
```python
updateUser #to change fields for users or update them 
```

the profile model has the same functionality of the user model with addition of enum types on choice for 
the following fields , the *gender* field, the *goal* field, and the *activity* field , all of those are restricted choice values using graphql and the enum ts type , and where registered to be used as types for graphql 
using the resgisterEnumType function 

the business model has all the previous functionalities in addition to a modified updating method (updateBusiness)
that allows the usage of graphql upload , but it's very important to notice that files can't be injected 
using graphql , instead they have to be injected using postman and curl queries like the following one 
```bash
{"query":"mutation UpdatingBusiness($file:Upload!){\n  updatingBusiness(id:1,input:{name:\"something\"}, file:$file)}"}
```
#### notice that graphql doesn't support uploading files using the graphql playground and that's the reason it wasn't
#### implemented there , also the business model is supported with three additional functions 
```python
addMedia  #which is used for adding Media accounts related to the business,
```
```python
addPhotos  #which is responsible for adding the pictures for the business 
```

there are the models for the photos and the social media accounts that are connected using one to many relation
with the business Model 

also notice in the business.service.ts that the 
```python
gettingStream #function that is created for the purpose of receiving the buffer from the graphql upload and saving it in the database
```