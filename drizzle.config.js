import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect:"postgresql",
  schema:"./configs/schema.js",
   out: "./drizzle",
dbCredentials:{
    url :'postgresql://neondb_owner:SviLaWw0TMp3@ep-purple-pond-a5gbndyk.us-east-2.aws.neon.tech/Ai_Video_Generator?sslmode=require'
}
});
