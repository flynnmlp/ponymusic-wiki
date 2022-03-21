CREATE TABLE IF NOT EXISTS tracks (
	id SERIAL PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
	release_date DATE NOT NULL,
	locked BOOLEAN NOT NULL,
	ogcache JSONB
);

-- ALTER TABLE tracks ADD COLUMN ogcache JSONB

CREATE TABLE IF NOT EXISTS track_tags(
	track_id INTEGER NOT NULL,
	property VARCHAR(255) NOT NULL,
	value TEXT NOT NULL,
	number INTEGER
);

CREATE TABLE IF NOT EXISTS track_history (
	track_id INTEGER,
	user_id VARCHAR(355),
	timestamp TIMESTAMP,
	value JSONB
);

CREATE TABLE IF NOT EXISTS users (
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	avatar VARCHAR(255),
	role INTEGER
);

CREATE TABLE IF NOT EXISTS user_flags (
	track_id INTEGER NOT NULL,
	user_id VARCHAR(255) NOT NULL,
	flag VARCHAR(20) NOT NULL,
	value REAL NOT NULL
);

CREATE TABLE IF NOT EXISTS sessions (
	session VARCHAR(255) PRIMARY KEY,
	user_id VARCHAR(255),
	expire_time TIMESTAMP
);

-- INSERT INTO users (id, name, role) VALUES('1', 'System', 2)
-- INSERT INTO sessions (session, user_id, expire_time) VALUES ('1', '1', NOW() + interval '1 year')

-- SELECT pg_catalog.setval(pg_get_serial_sequence('tracks', 'id'), (SELECT MAX(track_id) FROM track_history)+1);