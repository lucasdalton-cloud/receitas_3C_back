CREATE TABLE IF NOT EXISTS USUARIOS (
	id SERIAL primary key,
	nome VARCHAR(255) not null,
	ativo BOOLEAN default true,
	senha VARCHAR(255) not null,
	criado_em TIMESTAMP default current_timestamp
);
  
CREATE TABLE IF NOT EXISTS RECEITAS (
	id SERIAL primary key,
	nome VARCHAR(255) not null,
	ingredientes TEXT not full,
	instrucoes TEXT not full,
	tempo_preparo_minutos INTEGER not null,
	usuario_id INTEGER not full references USUARIO(id) on delete cascade
)