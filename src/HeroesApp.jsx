export const HeroesApp = () => {
	return (
		<div className="container">
			<header className="bg-primary text-white text-center p-3">
				<h1>Bem-vindo ao Meu App React</h1>
			</header>
			<main className="mt-4">
				<div className="row">
					<div className="col-md-6">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Título do Card</h5>
								<p className="card-text">Um exemplo rápido de texto para construir o título do card e compor o conteúdo do card.</p>
								<a href="#" className="btn btn-primary">Ir para algum lugar</a>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}