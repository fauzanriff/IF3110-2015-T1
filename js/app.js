//Problem : Web Aplikasi yang mampu berbagi pertanyaan dan memberikan jawaban. Setiap jawaban dapat diurutkan sesuai vote.
//Solution : Gunakan PHP, Javascript, CSS, dan MySQL dalam menyelesaikannya.

//Pages : 

	//Home - laman utama
		//brand
		-//#searchBar
		//askHere
		//questionTag
		-//#questionDiv * NQuestion
	//AskHere - input pertanyaan
		//brand
		-//#askForm
	//Question?id=Qno - laman untuk setiap pertanyaan
		//brand
		//topic
		-//#focusQuestionDiv
		//answerTag
		-//#focusAnswerDiv
		-//#answerForm

//Sub-Pages : 

	//#searchBar
		//textForm - query
		//submitForm

	//#questionDiv
		//Votes
		//Answers
		//Topic
		//asked by
		//edit
		//delete

	//#askForm
		//askTag
		//textForm - name
		//textForm - email
		//textForm - topic
		//textForm - content
		//submitForm

	//#answerForm
		//answerTag
		//textForm - name
		//textForm - email
		//textForm - content
		//submitForm

	//#focusQuestionDiv
		//Increase Votes button
		//Votes
		//Decrease Votes button
		//content
		//asked by
		//datetime
		//edit
		//delete

	//#focusAnswerDiv
		//Increase Votes button
		//Votes
		//Decrease Votes button
		//content
		//answered by
		//datetime
		//vote

//Database Structure :

	//question
		//id
		//name
		//email
		//topic
		//content
		//date
		//vote
		//answer

	//answer
		d
		//name
		//email
		//content
		//date
		//vote
		

	CREATE TABLE questions(
		id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
		name VARCHAR(30),
		email VARCHAR(50),
		topic VARCHAR(100),

		content TEXT,
	)
















