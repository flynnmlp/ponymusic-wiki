CREATE TABLE IF NOT EXISTS tracks (
	id SERIAL PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
	release_date DATE NOT NULL,
	locked BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS track_tags(
	track_id INTEGER NOT NULL,
	property VARCHAR(255) NOT NULL,
	value TEXT NOT NULL,
	number INTEGER
);


