CREATE TABLE public.address (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    street text NOT NULL,
    city text NOT NULL,
    country text NOT NULL
);
CREATE TABLE public.planets (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL,
    cuisine text NOT NULL
);
CREATE TABLE public.test_table (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL
);
ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.planets
    ADD CONSTRAINT planets_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.test_table
    ADD CONSTRAINT test_table_pkey PRIMARY KEY (id);
