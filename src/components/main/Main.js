import { useState } from "react";
import "./main.style.scss";
import { quizTypes } from "../../assets/data/quiz.types";
import { questions } from "../../assets/data/quiz.data";
import Quiz from "../quiz/Quiz";

const Main = () => {
	let [current, setCurrent] = useState(0);
	let [active, setActive] = useState(false);

	return (
		<>
			{/* Header */}

			<header>
				<div className="heading_cont">
					<h1>Quiz</h1>
				</div>
			</header>

			{/* Main */}

			<main>
				{/* Quiz Selection */}

				{active || (
					<section className="quiz_select_cont">
						<div className="quiz_type_cont">
							{quizTypes.map(({ id, name, icon }) => {
								return (
									<div
										onClick={() => {
											setActive(true);
											setCurrent(id);
										}}
										key={id}
										className="quiz"
									>
										<div className="quiz_icon_cont">
											{icon()}
										</div>

										<div className="quiz_title_cont">
											<h2> {name} </h2>
										</div>
									</div>
								);
							})}
						</div>
					</section>
				)}

				{/* Quiz */}

				{active && (
					<section className="quiz_cont">
						<Quiz
							setActive={setActive}
							quizQuestions={questions[current]}
						/>
					</section>
				)}
			</main>
		</>
	);
};

export default Main;
