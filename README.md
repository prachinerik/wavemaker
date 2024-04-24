# backend
User Onboarding App Node, Express with Typescript and MySQL Database.

# Steps to Run the App

## Step1 : Install Docker
## Step2 : Set up MySQL container in Docker

//To create a MySQL instance on Docker.

$ docker pull mysql:latest
$ docker run --name container_name -p 33061:3307 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:latest

>To connect to docker MySQL through command line

$ docker exec -it container_name bash.
mysql -u root -p.
Enter password: ...
mysql>.
>(In case of access issues use this command: GRANT ALL PRIVILEGES ON mydb.* TO ‘root’@‘%’ WITH GRANT OPTION;).

## Step 3 : Set up Data Base:
<These queries should be run in this exact order>

		USE database;

		CREATE TABLE `users` (
  		 `user_id` INT NOT NULL AUTO_INCREMENT,
   		 PRIMARY KEY(user_id),
    		`first_name` varchar(50),
    		`last_name` varchar(50),
		`email` varchar(255),
    		`password` varchar(255),
		UNIQUE(email)
		);
  

		CREATE TABLE `options` (
   		`options_id` INT NOT NULL AUTO_INCREMENT,
    		PRIMARY KEY(options_id),
    		`options` varchar(50),
    		`option_weight` INT NOT NULL,
		UNIQUE(options)
		);
  

		INSERT INTO options (options_id, options, option_weight)
		VALUES (1, 'Longterm Unemployment', 30),
 		(2, 'Short Attention Span', 30),
 		(3, 'Anxiety', 30),
 		(4, 'Depression', 30),
 		(5, 'Imposter Syndrome', 80),
 		(6, 'Burnout', 80),
 		(7, 'Stress', 80),
 		(8, 'Unexpected Unemployment', 80);
   

		CREATE TABLE `programs` (
   		`program_id` INT NOT NULL AUTO_INCREMENT,
   		 PRIMARY KEY(program_id),
   		`programs_name` varchar(50),
	   	UNIQUE(programs_name)
		);
  

		INSERT INTO programs (program_id, programs_name)
		VALUES (1, 'Program A'),
 		(2, 'Program B'),
 		(3, 'Program C'),
 		(4, 'Program D'),
 		(5, 'Program E');


		CREATE TABLE `selected_options` (
   		`user_id` INT,
   		`options_id` INT,
		PRIMARY KEY(user_id,options_id),
    		FOREIGN KEY (options_id) REFERENCES options(options_id),
   		 FOREIGN KEY (user_id) REFERENCES users(user_id)
		);
  

		CREATE TABLE `suitable_programs` (
   		`program_id` INT,
   		`options_id` INT,
		PRIMARY KEY(program_id,options_id),
    		FOREIGN KEY (options_id) REFERENCES options(options_id),
   		 FOREIGN KEY (program_id) REFERENCES programs(program_id)
		);


		INSERT INTO suitable_programs (program_id, options_id) VALUES (1, 3),
 		(1, 4),
		(1, 6),
		(2, 1),
		(2, 2),
		(2, 7),
		(3, 1),
		(3, 2),
		(3, 5),
		(4, 6),
		(4, 3),
		(5, 4),
		(5, 8),
		(5, 3);

 
## Step4: Run the backend Project project
In the command line go to the folder where the project has been downloaded and run following commands:
1. npm install
2. npm run build
3. npm run dev

Here is the link for the Front end repository: https://github.com/prachinerik/WavemakerFrontEnd

## Step5: Run the front end
In the command line go to the folder where the project has been downloaded and run following commands:
1. npm install
2. npm run dev

## Step6: To access the Front end
http://localhost:5173/login

Whoo! It is done.



