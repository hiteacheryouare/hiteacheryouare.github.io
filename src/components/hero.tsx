import TypeIt from "typeit-react"
export default () => {
	return (
		<>
		<div className="font-bold flex content-center justify-center text-4xl lg:text-6xl xl:text-8xl p-10">
			<TypeIt
					getBeforeInit={(instance) => {
						instance
							.type("Your Home for Ryan's ")
							.pause(750)
							.type("Blog")
							.pause(750)
							.delete(4)
							.type("Portfolio")
							.pause(750)
							.delete(9)
							.type("Freelance Web Design Services")
							.pause(750)
							.delete(36)
							.type("All Things Ryan.")
						return instance;
					}
					}
				/>
		</div>
			<div className="font-semibold flex content-center justify-center text-xl lg:text-2xl xl:text-4xl pb-10">
					How can I help you&nbsp;<i className="highlightText">push what's possbile</i>?
			</div>
			<div className="flex content-center justify-center pb-10">
				<a href="/freelance/" className="btn btn-primary">
						Request a consult &rarr;
				</a> &nbsp; &nbsp;
				<a href="/portfolio" className="btn btn-secondary">
						See the showcase &rarr;
				</a>
			</div>
		</>
	)
}