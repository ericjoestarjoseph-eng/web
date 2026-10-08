-- Run this in the Supabase SQL Editor
create table if not exists public.service_bookings (
  id bigint generated always as identity primary key,
  customer_name text not null,
  vehicle_number text not null,
  vehicle_model text not null,
  service_type text not null,
  service_date date not null,
  amount numeric not null,
  created_at timestamptz default now()
);

alter table public.service_bookings enable row level security;

drop policy if exists "Anyone can insert bookings" on public.service_bookings;
create policy "Anyone can insert bookings"
  on public.service_bookings for insert to anon, authenticated
  with check (true);

drop policy if exists "Anyone can view bookings" on public.service_bookings;
create policy "Anyone can view bookings"
  on public.service_bookings for select to anon, authenticated
  using (true);

grant usage on schema public to anon, authenticated;
grant insert, select on public.service_bookings to anon, authenticated;
