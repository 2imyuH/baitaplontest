// add 4 Best Sellers
let BestSeller = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty) {
        var a = {
            id: this.arr.length + 1 + 'b',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty: _warranty
        };
        this.arr.push(a);
    }
}

BestSeller.add('../img/addidas.png',
    'Sneaker Adidas Nam - A13',
    'Giày',
    '825000',
    `Size: 42
    Giày Thể Thao với kiểu dáng trẻ trung, năng động nhưng không kém phần tinh tế, thanh lịch được săn đón nhiều nhất và không thể thiếu trong bộ sưu tập giày của mỗi người
    ♥ Thiết kế trẻ trung; kiểu dáng thể thao, năng động
    ♥ Màu sắc đa dạng, tươi mới, phù hợp với mọi lứa tuổi
    ♥ Giày form chuẩn, đi êm chân, thoải mái không gò bó
    ♥ Đế giày cao su bền chắc, chống trơn trượt tốt, có độ chống dính cao
    ♥ Sử dụng thích hợp cho mọi hoàn cảnh: đi chơi, đi học, du lịch`,
    '2 tháng');

BestSeller.add('../img/Air-Jordan-1-Mid.jpg',
    'Air Jordan 1 Mid Smoke Grey',
    'Giày',
    '990000',
    `Size: 42
    Tone màu chủ đạo của sản phẩm này có sự kết hợp hài hòa giữa các gam màu trung tính đen, xám và trắng. Sự tương phản rõ rệt giữa các tone màu này mang đến cho đôi giày vẻ đẹp lập thể, vừa mạnh mẽ, vừa cá tính.
    Phiên bản này được chế tác từ chất liệu da cao cấp, có độ mềm mịn và đàn hồi rất tốt tạo cho người dùng cảm giác thoải mái, tự tin nhất khi chuyển động. Dấu Swoosh và họa tiết wings được thêu nổi bật trên thân và cổ giày giúp tăng khả năng nhận diện.
    Thay vì sử dụng kiểu cổ High của phiên bản tiền nhiệm thì giày Jordan 1 Light Smoke Grey được thiết kế theo kiểu cổ Mid thông dụng. Tuy nhiên, sự thay đổi này không hề ảnh hưởng tới độ “hot” của nó trên thị trường.
    Thiết kế có độ ôm vừa phải, có lỗ thông hơi trên bề mặt toe box đảm bảo người dùng luôn cảm thấy thoải mái và thông thoáng ngay cả khi phải đứng hoặc di chuyển trong nhiều giờ liền.
    Đế giày có thiết kế đặc biệt với những đường may tỉ mỉ, chắc chắn, tạo độ bám tốt trên mọi địa hình.`,
    '2 tháng');

BestSeller.add('../img/balenciaga.jfif',
    `Balenciaga Triple S Xanh Vàng`,
    'Giày',
    '1500000',
    `Size: 42
    Giày Balenciaga Triple S Xanh Vàng với chất liệu cao cấp đảm bảo độ bền và thoải mái chân khi mang. Kiểu dáng đơn giản nhưng không kém phầm sang trọng. Giúp bảo vệ đôi chân của bạn trong suốt quá trính vận động. Với cảm hứng đầy tự hào từ những phiên bản đi trước sẽ là người bạn đồng hành siêu bền bỉ cho bạn trong các trải nghiệm đường phố mỗi ngày.
    Đây là thương hiệu thời trang lâu đời nổi tiếng, cao cấp nhất nhì thế giới được thành lập từ năm 1919.
    Tiếp nối sự thành công, thương hiệu tiếp tục tung ra Triple S - dòng giày đa sắc màu, phá bỏ mọi giới hạn, đủ đẹp, đủ chất để khiến giới mộ điệu lại một lần nữa phải điên đảo
    Đây là mẫu giày cũng được nhiều người nghệ sĩ thế giới lựa chọn. Tại Việt Nam, giày Triple S được rất nhiều nghệ sĩ nổi tiếng yêu thích.
    Thiết kế đột phá.
    Một đôi giày ra đời đã phá vỡ những tiêu chuẩn về thời trang hiện nay.
    Phần đế cao, uốn lượn hơn hẳn để bạn ăn gian thêm vài centimet
    Pha trộn những gam màu vintage và nhiều chất liệu vải khác nhau.
    Trên thân, gót hay đế giày cũng đều được thêu và khắc tên thương hiệu, tạo sự đẳng cấp.`,
    '6 tháng')

BestSeller.add('../img/bostonian.jfif',
    `GIÀY TÂY NAM BOSTONIAN XÁCH TAY MỸ`,
    'Giày',
    '1000000',
    `SIZE 41
    Bostonian - Boston là thương hiệu giày của nam giới với sự thoải mái vượt trội và phong cách đặc biệt trong hơn 110 năm. 
    Được thành lập năm 1899 bởi Charles Jones trong Whitman, Massachusetts, 
    Boston là thương hiệu giày dép của những người đàn ông cao cấp đầu tiên - 
    và là người đầu tiên giới thiệu sự linh hoạt trong trang phục giày. 
    Bostonian với niềm đam mê đã tạo ra bước đột phá tiên tiến ngành công nghiệp giày dép, 
    cung cấp cho người đàn ông với một sự lựa chọn rất linh hoạt với phong cách truyền thống 
    và hiện đại trang bị cho họ thêm sự tự tin để theo đuổi thành công.`,
    '4 tháng')

BestSeller.add('../img/converse.jpg',
    `Converse Chuck Taylor All Star 1970s Black`,
    'Giày',
    '900000',
    `Size: 40
    Chất liệu vải nhẹ, dày dặn, cao cấp
Giày Sneaker Unisex Converse Chuck Taylor All Star 1970s Black/w 2018 được thiết kế từ chất liệu vải canvas nhẹ, 
dày dặn, cứng form hơn. Là dòng giày tiêu biểu và đặc trưng cho phong cách cổ điển của Converse.`,
    '2 tháng')

BestSeller.add('../img/depbong.jfif',
    `Dép bông gấu BROWN`,
    'Dép',
    '115000',
    `Size: 40
    Dép bông đi trong nhà thiết kế trẻ trung , mẫu mã đa dạng,
     màu sắc phong phú với đế chống trơn trượt , thiết kế ôm chân giữ cho bàn chân luôn ấm áp suốt mùa đông`,
    '1 tháng')

BestSeller.add('../img/deplotao.jfif',
    `Dép lỗ táo 2 màu xanh đen`,
    'Dép',
    '14000',
    `Size:39
    Dép lỗ táo là dòng dép đi trong nhà rất thông dụng hiện nay
    Chất liệu nhựa mềm dẻo, có lỗ thoát khí 
    Đế mềm, chống trơn, bám nền tốt, kể cả sàn trơn trượt
    Độ bền cao, màu nhã nhặn`,
    '1 tháng')

localStorage.setItem('BestSellers', JSON.stringify(BestSeller.arr));

let FeatureProduct = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty) {
        var a = {
            id: this.arr.length + 1 + 'f',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty: _warranty
        };
        this.arr.push(a);
    }
}

FeatureProduct.add('../img/depquaicheo.jfif',
    `Dép quai chéo GG`,
    'Dép',
    `150000`,
    `Size: 43
    Dép quai chéo nam GG là mẫu dép Unisex được nhiều bạn cả nam lẫn nữ ưa chuộng nhất. Đây là mẫu dép có thiết kế thanh lịch, 
    tối giản phù hợp với nhiều phong cách và trang phục khác nhau.
    Nhiều bạn lựa chọn mua cũng vì tính trẻ trung, năng động. 
    Bạn có thể tiện dụng mang ngay vào chân với quần short, quần jean hay đầm váy gì cũng đẹp.`,
    '1 tháng');

FeatureProduct.add('../img/depsuccross.jfif',
    `Dép sục Cross màu xanh ngọc`,
    'Dép',
    `190000`,
    `Độ mềm, nhẹ và êm chân luôn là những tiêu chí mà luôn được chú trọng.
    Được làm tự nhựa tế bào-Croslite kháng khuẩn, dễ vệ sinh nên dép Croc-đi mưa, 
    lội nước thoải mái mà không lo bẩn chân, có mùi hôi chân`,
    '1 tháng');

FeatureProduct.add('../img/depxongon.jpg',
    `Dép xỏ ngón kẹp nam đúc siêu nhẹ êm ái`,
    'Dép',
    `140000`,
    `Size: 42
    Dép làm từ chất liệu cao cấp , chắc chắn, dẻo dai. nhẹ
    Được thiết kế theo công nghệ mới, độ chống trơn trượt cao, mang đến cho người sử dụng cảm giác thoải mái và tự tin khi di chuyển.
    Phong cách đơn giản nhưng vẫn hiện đại, bắt kịp xu hướng thời trang mới.
    Màu sắc/ kiểu dáng: Nhiều màu`,
    '1 tháng');

FeatureProduct.add('../img/depxopquaikep.jfif',
    `Dép xốp quai kẹp`,
    'Dép',
    `35000`,
    `Size: 42`,
    '1 tháng');

FeatureProduct.add('../img/dep-quai-ngang-nam-5.jpg',
    `Dép nam quai ngang LVB1`,
    'Dép',
    `360000`,
    `Size: 40
    Thiết kế đơn giản thời trang được làm thủ công với bàn tay điêu luyện của những nghệ nhân có kinh nghiệm dày dặn trong nghề
    Xuất xứ: Made in Vietnam
    Chất liệu: Đế cao su nguyên chất chống trơn trợt.
    Thiết kế: Kiểu dáng năng động hợp phong cách giới trẻ`,
    '2 tháng');

FeatureProduct.add('../img/fila.jpg',
    `GIÀY FILA DISRUPTOR II`,
    'Giày',
    `2000000`,
    `Size: 42
    FILA Disruptor 2 là phiên bản sneaker đình đám của FILA với kiểu dáng hợp thời trang mang phong cách Hàn Quốc, chất liệu cao cấp cùng thiết kế phù hợp với nhiều hoạt động thể thao, 
    đế độ bám tốt cùng độ nặng phù hợp khiến đôi chân vững vàng hơn khi di chuyển và hoạt động.
    Theo đó phiên bản giày Fila Disruptor 2 Real này được làm hoàn bằng chất liệu da cao cấp, 
    kết hợp với đó là những đường cắt sắc sảo và những đường uốn lượn quanh đôi giày, 
    qua đó mới thấy được thiết kế tinh tế và rất bắt mắt. 
    Ngoài ra phiên bản này còn có 1 ưu điểm cực kì to lớn với các bạn có chiều cao 
    khiêm tốn khi mà phần đế được tôn giáng tên 4 cm chiều cao, 
    cùng với đó là thiết kế vô cùng mạnh mẽ có phần hầm hố hình rằng cưu đầy táo bạo.`,
    '6 tháng');

FeatureProduct.add('../img/johnston&murphy.jpg',
    `Johnston & Murphy Men's Melton Cap Toe`,
    'Giày',
    `2500000`,
    `Size: 40
    `,
    '4 tháng');

FeatureProduct.add('../img/Jordan-1-Mid.jpg',
    `Nike Air Jordan 1 Mid SE'Signal Blue`,
    'Giày',
    `5200000`,
    `Size: 43`,
    '6 tháng');

FeatureProduct.add('../img/newbalance.png',
    `Giày New Balance 550 'White Green' BB550WT1`,
    'Giày',
    `9890000`,
    `Size: 42.5
    New Balance là một thương hiệu thời trang và giày thể thao từ Mỹ. Hơn 100 năm qua, New Balance luôn tìm hiểu nhu cầu của những vận động viên để đầu tư, thiết kế những sản phẩm phù hợp. 
    New Balance luôn tập trung đến từng chuyển động của cơ thể con người để có thể “Tạo-Ra-Điều-Tuyệt-Vời” (Making Excellent Happen)!`,
    '6 tháng');

FeatureProduct.add('../img/puma.jfif',
    `Giày Puma Jaab XT Summer chính hãng 2019`,
    'Giày',
    `2990000`,
    `Size: 39
    Giày Puma Jaab XT Summer là một trong những mẫu giày thể thao tập gym ,chạy bộ, đi chơi mới nhất của thương hiệu Puma
    Mẫu giày được thiết kế với cảm hứng từ bộ môn quyền anh mạnh mẽ.
    Phần upper được làm bằng vãi dệt có tính đàn hồi cao tạo sự thoái mái.
    Lớp đệm midsole PROFOAM siêu nhẹ giúp đôi chân dễ chịu suốt cả ngày.
    Đế ngoài bằng cao su có rãnh chống trượt  tạo cảm giác linh hoạt khi di chuyển.
    Dù đi tập hay đi chơi, giày Puma Jaab XT Summer vẫn sẽ là một lựa chọn tuyệt vời cho bạn`,
    '6 tháng');

FeatureProduct.add('../img/skechers.jpg',
    `Giày skechers EXO D'lites 2.0 Sweet Monster`,
    'Giày',
    `2090000`,
    `Size: 42
    Chất liệu: Vải dệt
    Kiểu dáng giày sneaker nam năng động
    Công nghệ đệm Air-Cooled Memory Foam êm ái, nhẹ nhàng
    Form ôm chân tăng sự ổn định và cân bằng
    Lớp lót êm ái, thấm hút tốt cho đôi chân luôn thông thoáng
    Đế cao su và sử dụng công nghệ nén tăng độ êm ái
    Gam màu hiện đại, dễ dàng phối với nhiều trang phục và phụ kiện
    Xuất xứ thương hiệu: Mỹ
    `,
    '6 tháng');

FeatureProduct.add('../img/under-armour.jpg',
    `Giày Under Armour`,
    'Giày',
    `2450000`,
    `Size: 39
    Màu sắc: Trắng kết hợp Đen
    Đế BIOM phù hợp vs kích thước bàn chân, đem lại cảm giác thoải mái. 
    Thành phần TPU ở đế giày tạo độ bền, dẻo dai và êm ái tuyệt đối khi di chuyển.
    Đế giày: Cao su`,
    '6 tháng');

FeatureProduct.add('../img/vans.jpg',
    `Vans Old Skool Stacked`,
    'Giày',
    `2500000`,
    `Size: 42
    Sản phẩm ra đời năm 1977, Vans Old Skool trở thành biểu tượng trượt ván - Skate Shoes của những tín đồ trên toàn thế giới.
    Ưu điểm của đôi giày là có độ bền khá tốt, đơn giản chắc chắn nên được phần đa người dùng ưa chuộng.`,
    '36 tháng kể từ ngày sản xuất');


localStorage.setItem('FeatureProduct', JSON.stringify(FeatureProduct.arr));