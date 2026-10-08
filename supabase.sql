-- Run this in the Supabase SQL Editor
create table if not exists service_bookings (
  id bigint generated always as identity primary key,
  customer_name text not null,
  vehicle_number text not null,
  vehicle_model text not null,
  service_type text not null,
  service_date date not null,
  amount numeric not null,
  created_at timestamptz default now()
);

alter table service_bookings enable row level security;

create policy "Anyone can insert bookings"
  on service_bookings for insert to anon with check (true);

create policy "Anyone can view bookings"
  on service_bookings for select to anon using (true);
