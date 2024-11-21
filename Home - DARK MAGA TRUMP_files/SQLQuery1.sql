create database quanlynhanvien
use quanlynhanvien
create table ChucVu
( MaCV varchar(10) primary key,
  TenCV varchar(20),
  HesoPC float,)

create table Phong(
Maph varchar(10) primary key,
Tenph varchar(20),
Diachiph varchar(30),)

create table Nhanvien(
MaNV varchar(10)primary key,
TenNV varchar(30),
Diachi varchar(30),
HSLuong float,
MaCV varchar(10) foreign key references ChucVu(MaCV),
Maph varchar(10) foreign key references Phong(Maph),
Luong int,
Thuclinh int,)

insert into ChucVu values
('cv1','truongphong',0.6),
('cv2','quanly',0.4),
('cv3','launha',0.7),
('cv4','noiphet',0.8),
('cv5','chotdon',0.5);

insert into Phong values
('p1','tongthong','toa A'),
('p2','thuonggia','toa B'),
('p3','Vip','toa A'),
('p4','Trungcap','toa C'),
('p5','binhdan','toa C');

insert into Nhanvien values
('nv1','Nguyen A','cc',0.9,'cv1','p1',10,13),
('nv2','Nguyen B','ac',0.8,'cv2','p2',11,16),
('nv3','Nguyen C','vc',1.4,'cv3','p3',12,14),
('nv4','Nguyen D','bc',3.3,'cv4','p4',13,17),
('nv5','Nguyen E','qc',0.2,'cv5','p5',14,15),
('nv6','Nguyen F','tc',0.4,'cv1','p5',10,14),
('nv7','Nguyen G','rc',0.7,'cv2','p1',19,25);


create view view1 
as
select MaNV, TenNV,Luong,TenCV
from Nhanvien,ChucVu
where ChucVu.MaCV = Nhanvien.MaCV
select * from view1


select Luong , TenNV,count(Nhanvien.MaNV) as vcl
from Nhanvien, ChucVu,Phong
where Nhanvien.MaCV = ChucVu.MaCV and Nhanvien.Maph = Phong.Maph
group by Luong , TenNV

select Diachi,TenNV
from Nhanvien
where HSLuong >= MAX(select 