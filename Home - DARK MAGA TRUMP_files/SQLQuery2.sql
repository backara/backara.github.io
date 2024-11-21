create database Quanlybanhang
use Quanlybanhang
create table hanghoa(
	mahang varchar(20) primary key,
	Tenhang varchar(20),
	Donvitinh varchar(20),
	Solg int
)
create table hoadon(
	Mahd varchar(20) primary key,
	Ngayhd date,
	Tienban int,
	Giamgia float,
	Thanhtoan float
)	
create table CThoadon(
	Mahd varchar(20) foreign key references hoadon(Mahd),
	mahang varchar(20) foreign key references hanghoa(mahang),
	primary key(Mahd,mahang),
	Solg int,
	Dongia float,
)

INSERT INTO hanghoa (mahang, Tenhang, Donvitinh, Solg)
VALUES 
    ('HH001', 'Banh', 'Hop' , 100),
    ('HH002', 'Sua', 'Hop', 200),
    ('HH003', 'Gao', 'Kg', 50);

-- Thêm dữ liệu vào bảng hoadon
INSERT INTO hoadon (Mahd, Ngayhd, Tienban, Giamgia, Thanhtoan)
VALUES 
    ('HD001', '2023-11-06', 100000, 5, 95000),
    ('HD002', '2023-11-07', 200000, 10, 180000);

-- Thêm dữ liệu vào bảng CThoadon
INSERT INTO CThoadon (Mahd, mahang, Solg, Dongia)
VALUES 
    ('HD001', 'HH001', 2, 50000),
    ('HD001', 'HH002', 1, 100000),
    ('HD002', 'HH003', 3, 70000);

--cau2-- Hiển thị thông tin các mặt hàng có số lượng > 100 đơn vị tính.
select mahang,Tenhang,Donvitinh,Solg
from hanghoa
where Solg > 100
--3) Tạo bổ sung ràng buộc Default cho cột NgayHD là ngày hiện tại.
create default vcl
as
getdate() 
exec sp_bindefault vcl,'hoadon.Ngayhd'
--4) Tạo trigger cập nhật lại số lượng hàng trong bảng HANGHOA mỗi khi hàng được bán.
--5) Hiển thị số tiền Thanh toán của hóa đơn có mã ‘HD001’
select Thanhtoan
from hoadon
where Mahd = 'HD001'
--6) Tạo bổ sung ràng buộc Default cho cột Tienban bằng 0
create default df_Tienban
as 0
exec sp_bindefault df_Tienban,'hoadon.Tienban'
--7) Tạo trigger cập nhật lại tiền bán của mỗi hóa đơn khi thêm mặt hàng vào bảng
--CTHOADON. Biết công thức tính tiền bán trên mỗi hóa đơn là:
--a. Tienban = Sum(Soluong*Dongia)
create trigger vl on CThoadon
for insert 
as 
update hoadon
set Tienban = (select sum(CThoadon.Solg * Dongia) from CThoadon)
where Mahd in (select Mahd from inserted)

--8) Hiển thị thông tin các hóa đơn có tiền thanh toán lớn nhất.
select Mahd,Ngayhd,Tienban,Giamgia,Thanhtoan
from hoadon
where Thanhtoan >= (select max(Thanhtoan) from hoadon)
--9) Tạo bổ sung ràng buộc Rule cho cột Soluong của bảng Hanghoa nhận giá trị lớn hơn 0.
create rule r_Solg
as
@Solg > 0
exec sp_bindrule r_Solg,'hanghoa.Solg'
--10)Tạo Trigger cập nhật lại số tiền cần Thanhtoan khi cột Giamgia thay đổi. Biết công
--thức tính số tiền cần thanh toán trên mỗi hóa đơn là:
--a. Thanhtoan=Tienban-Tienban*Giamgia
create trigger vcl123 on hoadon
for update
as
update hoadon
set Thanhtoan = Tienban - Tienban * Giamgia

--11)Hiển thị thông tin các mặt hàng có đơn vị tính là ‘Bộ’.
--12)Tạo bổ sung ràng buộc Rule cho cột Donvitinh chỉ nhận các giá trị: Chiếc, Bộ
create rule r2
as
@Donvitinh in ('Chiec' , 'Bo')
exec sp_bindrule r2,'hanghoa.Donvitinh' 
drop rule r2
exec sp_unbindrule'hanghoa.Donvitinh'
--13)Tạo trigger cập nhật lại tiền bán của mỗi hóa đơn khi xóa mặt hàng được bán trong
--bảng CTHOADON. Biết công thức tính tiền bán trên mỗi hóa đơn là:
--Tienban=Sum(Soluong*Dongia)
create trigger t3 on cthoadon
for delete
as
update HOADON
set TIENBAN = (select sum(cthoadon.Solg*cthoadon.Dongia)
                from deleted, CTHOADON
                where deleted.Mahd=CThoadon.Mahd
				group by CThoadon.Mahd)
where MAHD in (select MAHD from deleted)
--14)Hiển thị Mã hàng, Số lượng hàng được bán bởi hóa đơn có mã là ‘HD01’
--15)Tạo view lưu thông tin các mặt hàng chưa được bán tại cửa hàng. Thông tin gồm
--có: Mã hàng, Tên hàng, Đơn vị tính.
--16)Tạo trigger cập nhật lại tiền bán của mỗi hóa đơn khi chỉnh sửa lại thông tin mặt
--hàng được bán trong bảng CTHOADON. Biết công thức tính tiền bán trên mỗi hóa
--đơn là:
--Tienban=Sum(Soluong*Dongia)
create trigger vcl3 on CThoadon
for update
as
update hoadon
set Tienban = (select sum(CThoadon.Solg * CThoadon.Dongia) 
						  from CThoadon
						  where CThoadon.Mahd = hoadon.Mahd)

create view v123
as
select * 
from hoadon

select *  
from v123



--17) Hiển thị Tiền bán của hóa đơn có mã là ‘HD01’
select Mahd, Tienban
from hoadon
where Mahd = 'HD001'
--18) Hiển thị thông tin mặt hàng được bán với số lượng ít nhất tại cửa hàng. Thông tin
select mahang,Tenhang,Solg
from hanghoa
where Solg <= (select min(Solg) from hanghoa)
--hiển thị gồm có: Mã hàng, Tên hàng, Tổng số lượng hàng được bán.
--19) Tạo thủ tục hiển thị thông tin của hàng hóa khi biết mã hàng.
select *
from hanghoa
where mahang = 'HH001'

create proc vc @mahang varchar(20)
as 
select *
from hanghoa
where mahang = @mahang


exec vc 'HH004'

--20)Hiển thị mã hóa đơn được lập trong năm 2020
select Mahd , Ngayhd
from hoadon
where year(Ngayhd) = 2023
--21) Hiển thị thông tin mặt hàng được bán với số lượng nhiều nhất tại cửa hàng.
select hanghoa.mahang, Tenhang,CThoadon.Solg as solbban
from hanghoa,CThoadon
where hanghoa.mahang = CThoadon.mahang
and CThoadon.Solg >= (select max(Solg) from CThoadon)
--Thông tin hiển thị gồm có: Mã hàng, tên hàng, tổng số lượng hàng được bán.
--22) Tạo thủ tục hiển thị thông tin của hóa đơn khi biết mã hóa đơn.
create proc vc1 @Mahd varchar(20)
as
select * 
from hoadon
where Mahd = @Mahd

exec vc1 'HD003'
drop proc vc1
--23) Backup cơ sở dữ liệu sang ổ đĩa khác.
backup database Quanlybanhang to disk = 'C:\vcl.bak'