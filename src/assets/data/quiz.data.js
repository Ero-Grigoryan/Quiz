export let questions = [
	// HTML

	[
		{
			id: 0,
			question: "What does HTML stands for?",
			options: [
				"Hypertext Machine language",
				"Hypertext and links markup language",
				"Hypertext Markup Language",
				"Hightext machine language",
			],
			answer: 2,
		},

		{
			id: 1,
			question: "How is document type initialized in HTML5?",
			options: [
				"<!DOCTYPE HTML>",
				"</DOCTYPE HTML>",
				"</DOCTYPE>",
				"</DOCTYPE html>",
			],
			answer: 0,
		},

		{
			id: 2,
			question:
				"Which of the following HTML Elements is used for making any text bold?",
			options: ["<p>", "<i>", "<li>", "<b>"],
			answer: 3,
		},

		{
			id: 3,
			question:
				"Which of the following HTML element is used for creating an unordered list?",
			options: ["<i>", "<ul>", "<em>", "<ui>"],
			answer: 1,
		},

		{
			id: 4,
			question: "What is the font-size of the h1 heading tag?",
			options: ["3.5 em", "2.17 em", "1.5 em", "2 em"],
			answer: 3,
		},
	],

	// CSS

	[
		{
			id: 0,
			question: "Which of the below is the abbreviation of CSS?",
			options: [
				"Cascade sheets style",
				"Cascading style sheets",
				"Color and style sheets",
				"Coded Style Sheet",
			],
			answer: 1,
		},

		{
			id: 1,
			question:
				"Which of the following is the correct syntax to add the external stylesheet in CSS?",
			options: [
				"<style src = quiz.css>",
				"<style src = 'quiz.css'>",
				"<stylesheet> quiz.css </stylesheet>",
				"<link rel='stylesheet' type='quiz/css' href='quiz.css'></link>",
			],
			answer: 3,
		},

		{
			id: 2,
			question:
				"Which of the below CSS properties is used to change the background color of CSS?",
			options: [
				"background-color",
				"bg color",
				"color-background",
				"color",
			],
			answer: 0,
		},

		{
			id: 3,
			question:
				"Which of the below CSS class is used to change the text color of CSS?",
			options: [
				"background-color",
				"color-background",
				"color",
				"None of the above",
			],
			answer: 2,
		},

		{
			id: 4,
			question:
				"Which of the below is the correct syntax to put a line over text in CSS?",
			options: [
				"text-decoration: line",
				"text-decoration: none",
				"text-decoration: underline",
				"text-decoration: overline",
			],
			answer: 3,
		},
	],

	//JavaScript

	[
		{
			id: 0,
			question: "Inside which HTML element do we put the JavaScript?",
			options: ["<javascript>", "<js>", "<src>", "<script>"],
			answer: 3,
		},

		{
			id: 1,
			question: "Where is the correct place to insert a JavaScript?",
			options: [
				"The head section",
				"Both the head section and the body section are correct",
				"The body section",
				"None of the above",
			],
			answer: 1,
		},

		{
			id: 2,
			question:
				"Is it necessary for the external script file to contain a <script> tag?",
			options: [
				"Yes",
				"Depends on the type of include",
				"No",
				"None of the above",
			],
			answer: 2,
		},

		{
			id: 3,
			question:
				"What is the correct syntax for referring to an external script called 'gfg.js'?",
			options: [
				"<script src='gfg.js'>",
				"<script name='gfg.js'>",
				"<script href='gfg.js'>",
				"None of these",
			],
			answer: 0,
		},

		{
			id: 4,
			question:
				"How many ways are there with which we can declare a variable in javascript?",
			options: [
				"Only one",
				"Infinitely many",
				"None of the above",
				"Three",
			],
			answer: 3,
		},
	],

	// React

	[
		{
			id: 0,
			question:
				"Which of the following command is used to create react-js-app?",
			options: [
				"npx create-react-app appname",
				"npm install create-react-app",
				"npx install create-react-app -g",
				"install - l create-react-app",
			],
			answer: 0,
		},

		{
			id: 1,
			question:
				"In React.js which one of the following is used to create a class for Inheritance?",
			options: ["Create", "Extends", "Inherits", "Delete"],
			answer: 1,
		},

		{
			id: 2,
			question:
				"What is the default port number in which the application run?",
			options: ["3000", "8080", "5000", "3030"],
			answer: 0,
		},

		{
			id: 3,
			question:
				"Which of the following valid component return type of React?",
			options: ["2", "5", "1", "3"],
			answer: 2,
		},

		{
			id: 4,
			question:
				"Which of the following is a way to handle data in React.js?",
			options: [
				"Services & Components",
				"State & Services",
				"State & Component",
				"State & Props",
			],
			answer: 3,
		},
	],
];
