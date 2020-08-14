CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."reviews"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "body" text NOT NULL, "planet_id" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("planet_id") REFERENCES "public"."planets"("id") ON UPDATE restrict ON DELETE restrict);
