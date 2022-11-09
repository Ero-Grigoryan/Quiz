import { useState } from "react";
import "./quiz.style.scss";
import { GiPartyPopper } from "react-icons/gi";
import { v4 } from "uuid";

const Quiz = ({ quizQuestions, setActive }) => {
	let [current, setCurrent] = useState(0);
	let [answers, setAnswers] = useState(0);
	let [procents, setProcents] = useState(80 / quizQuestions.length);
	let [answerProcantage, setAnswerProcantage] = useState(0);
	let { id, question, options, answer } = quizQuestions[current];
	let [completed, setCompleted] = useState(false);

	// Buttons Functional

	// Retry

	let handleRetry = () => {
		setCurrent(0);
		setAnswers(0);
		setProcents(80 / quizQuestions.length);
		setAnswerProcantage(0);
		setCompleted(false);
	};

	// To Menu

	let handleToMenu = () => {
		setActive(false);
		handleRetry();
	};

	return (
		// Quiz Box

		<div className="quiz_box">
			{/* Progress */}
			{/* Progress Line */}
			{completed || (
				<div className="progress_cont">
					<div
						style={{ width: procents + "%" }}
						className="progresss_line"
					></div>
				</div>
			)}
			{/* Progress Counter */}
			{completed || (
				<div className="progress_counter">
					<span>
						Completed {current} / {quizQuestions.length}{" "}
					</span>
				</div>
			)}
			{/* Questions */}
			<div className="questions_cont">
				{completed && <GiPartyPopper />}

				<p>
					{completed
						? "Right Answers " +
						  answers +
						  " of " +
						  quizQuestions.length
						: question}
				</p>

				{completed && (
					<>
						<p>Completed {answerProcantage + "%"}</p>
						<button onClick={handleRetry}>Retry</button>
						<button onClick={handleToMenu}>Back To Menu</button>
					</>
				)}
			</div>

			{/* Answers */}

			{completed || (
				<div className="answers_cont">
					{options.map((option, index) => {
						return (
							<div
								onClick={() => {
									if (current >= quizQuestions.length - 1) {
										setCompleted(true);
									}

									// Correct Answers Count

									if (index === answer) {
										setAnswers((c) => c + 1);
										setAnswerProcantage((c) => c + 20);
									}

									// Progress Line Procents

									setProcents(
										(c) => c + 80 / quizQuestions.length
									);

									// Current Question

									if (current < quizQuestions.length - 1) {
										setCurrent((c) => c + 1);
									}
								}}
								key={v4()}
								className="answer_cont"
							>
								<p>{index + 1 + "." + " " + option}</p>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Quiz;
