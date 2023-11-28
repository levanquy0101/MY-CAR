let LEFT, RIGHT, UP, DOWN; //Khai báo biến để lưu giá ID setInterval trái,phải,lên xuống
    let score = 0;
    let delay = 10;
    let speed = 1;
    function Speed(){
        speed++
    }
    const canvas = document.getElementById("myCanvas"); // Lấy giá trị ID myCanvas
    const ctx = canvas.getContext("2d"); //Tạo ngữ cảnh vẽ và xử lý đồ họa
    var carImages = { // Khởi tạo đối tượng hình ảnh xe có các hướng di chuyển
        right: new Image(), // Gán đối tượng Image vào thuộc tính
        left: new Image(),
        up: new Image(),
        down: new Image()
    };
    carImages.right.src = 'img/car_right.png'; // Gán đường dẫn hình ảnh của hướng vào hướng di chuyển
    carImages.left.src = 'img/car_left.png';
    carImages.up.src = 'img/car_up.png';
    carImages.down.src = 'img/car_down.png';
    var car = {  // Khởi tạo đối tượng xe cho vị trí mặc định của xe
        x:10, y:10
    }
    var obstacle = { // Khởi tạo đối tượng chướng ngại vật
        x: Math.floor(Math.random() * (canvas.width -50)) +1,
        y: Math.floor(Math.random() * (canvas.height -50)) +1
    }
    var reward ={   // Khởi tạo đối tượng phần thưởng
        x: Math.floor(Math.random() * (canvas.width -50)) +1,
        y: Math.floor(Math.random() * (canvas.height -50)) +1
    }
    carImages.right.onload = function() { // Tải hình ảnh xe đảm bảo là tải ảnh xong mới vẽ trên canvas
        ctx.drawImage(carImages.right, car.x, car.y ,70, 50); // Vẽ hình ảnh xe: hình ảnh xe, car.x và car.y vị trí xe mặc định, 70,50 là kích thước xe
    }
    function resizeCanvas() { //Thay đổi kích thước canvas theo cửa sổ trình duyệt và cập nhật vị trí của các đối tượng
        canvas.width = window.innerWidth *0.9; //90% độ rộng của cửa sổ trình duyệt
        canvas.height = window.innerHeight * 0.75; // 75% của chiều cao cửa sổ trình duyệt
        ctx.drawImage(carImages.right, car.x, car.y ,70, 50);
        ctx.fillStyle="red" //Màu sắc khi vẽ chướng ngại vật
        ctx.fillRect(obstacle.x,obstacle.y,25,25) // Vẽ chướng ngại vật có tọa độ tại x , y và có kích thước là 25 , 25
        ctx.fillStyle="green" //Màu sắc của phần thưởng
        ctx.fillRect(reward.x,reward.y,25,25) // Vẽ phần thưởng

    }
    window.addEventListener("resize", resizeCanvas); //Gọi mỗi khi thay đổi kích thước trình duyệt
    resizeCanvas();
    console.log(canvas.width) // Xem độ rộng canvas
    console.log(canvas.height) // Xem chiều cao của canvas

    // ctx.fillStyle="red" //Màu sắc khi vẽ chướng ngại vật
    // ctx.fillRect(obstacle.x,obstacle.y,25,25) // Vẽ chướng ngại vật có tọa độ tại x , y và có kích thước là 25 , 25
    // ctx.fillStyle="green" //Màu sắc của phần thưởng
    // ctx.fillRect(reward.x,reward.y,25,25) // Vẽ phần thưởng

    function startRight() { // Hàm rẽ phải
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Xóa màn hình canvas tại vị trí 0,0 đến độ rộng,chiều cao của trình duyệt
        ctx.drawImage(carImages.right, car.x, car.y, 70, 50); // Sử dụng phương thức để vẽ hình ảnh : tham số đầu là hình ảnh vẽ, car.x và car.y là vị trí vẽ, 70 và 50 là kích thước hình ảnh
        ctx.fillStyle="red" //Màu sắc khi vẽ chuinwgs ngại vật
        ctx.fillRect(obstacle.x,obstacle.y,25,25) // Vẽ chướng ngại vật có tọa độ tại x , y và có kích thước là 25 , 25
        ctx.fillStyle="green" //Màu sắc của phần thưởng
        ctx.fillRect(reward.x,reward.y,25,25) // Vẽ phần thưởng
        car.x += speed;
        check();
        check2();
        check3();
    }

    function startLeft() { // Hàm rẽ trái
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(carImages.left, car.x, car.y, 70, 50);
        ctx.fillStyle="red" //Màu sắc khi vẽ
        ctx.fillRect(obstacle.x,obstacle.y,25,25) // Vẽ chướng ngại vật có tọa độ tại x , y và có kích thước là 25 , 25
        ctx.fillStyle="green" //Màu sắc của phần thưởng
        ctx.fillRect(reward.x,reward.y,25,25) // Vẽ phần thưởng
        car.x -= speed;
        check();
        check2();
        check3();
    }

    function startUp() { // Hàm đi lên
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(carImages.up, car.x, car.y, 50, 70);
        ctx.fillStyle="red" //Màu sắc khi vẽ chướng ngại vật
        ctx.fillRect(obstacle.x,obstacle.y,25,25) // Vẽ chướng ngại vật có tọa độ tại x , y và có kích thước là 25 , 25
        ctx.fillStyle="green" //Màu sắc của phần thưởng
        ctx.fillRect(reward.x,reward.y,25,25) // Vẽ phần thưởng
        car.y -= speed;
        check();
        check2();
        check3();
    }

    function startDown() { // Hàm đi xuống
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(carImages.down, car.x, car.y, 50, 70);
        ctx.fillStyle="red" //Màu sắc khi vẽ chướng ngại vật
        ctx.fillRect(obstacle.x,obstacle.y,25,25) // Vẽ chướng ngại vật có tọa độ tại x , y và có kích thước là 25 , 25
        ctx.fillStyle="green" //Màu sắc của phần thưởng
        ctx.fillRect(reward.x,reward.y,25,25) // Vẽ phần thưởng
        car.y += speed;
        check();
        check2();
        check3();
    }

    function check(){ // Hàm kiểm tra va chạm biên
        if(car.x<=1 || car.x+70>=canvas.width || car.y<=1 || car.y+70 >=canvas.height){ //Nếu đối tượng chạm biên của canvas thì xóa tất cả setInterval và thông báo thua
            clearInterval(LEFT);
            clearInterval(RIGHT);
            clearInterval(UP);
            clearInterval(DOWN);
            document.getElementById("myCanvas").style.borderColor="red"
            var reset = confirm("Bạn đã thua!. Nhấn OK để chơi lại hoặc nhấn HỦY để hủy bỏ!")
            if(reset){
                ctx.clearRect(0,0,canvas.width,canvas.height)
                car.x=10;
                car.y=10;
                ctx.drawImage(carImages.right, car.x, car.y, 70, 50);
                document.getElementById("myCanvas").style.borderColor="blue"
                score = 0;
                document.getElementById("score").innerHTML= "SCORE: "+ (score);
                speed =1;
            }
        }
    }
    function check2(){ //Hàm kiểm tra va chạm chướng ngại vật
        if (
            car.x + 70 > obstacle.x &&      // Xe đi qua phía bên phải chướng ngại vật
            car.x < obstacle.x + 25 &&      // Xe đi qua phía bên trái chướng ngại vật
            car.y + 70 > obstacle.y &&      // Xe đi qua phía dưới chướng ngại vật
            car.y < obstacle.y + 25         // Xe đi qua phía trên chướng ngại vật
        ) {
            document.getElementById("score").innerHTML= "SCORE: "+ (--score);
            document.getElementById("score").innerHTML= "SCORE: "+ (--score);
            obstacle.x = Math.floor(Math.random() * (canvas.width -50)) +1
            obstacle.y = Math.floor(Math.random() * (canvas.height -50)) +1
        }
        ctx.fillStyle="red" //Màu sắc khi vẽ chướng ngại vật
        ctx.fillRect(obstacle.x,obstacle.y,25,25) // Vẽ chướng ngại vật có tọa độ tại x , y và có kích thước là 25 , 25
        console.log("CNV X: "+obstacle.x)
        console.log("CNV Y: "+obstacle.y)
    }
    function check3(){  //Hàm kiểm tra va chạm phần thưởng
        if (
            car.x + 70 > reward.x &&      // Xe đi qua phía bên phải chướng ngại vật
            car.x < reward.x + 25 &&      // Xe đi qua phía bên trái chướng ngại vật
            car.y + 70 > reward.y &&      // Xe đi qua phía dưới chướng ngại vật
            car.y < reward.y + 25         // Xe đi qua phía trên chướng ngại vật
        ) {
            document.getElementById("score").innerHTML= "SCORE: "+ (++score);
            reward.x = Math.floor(Math.random() * (canvas.width -50)) +1
            reward.y = Math.floor(Math.random() * (canvas.height -50)) +1
        }
        ctx.fillStyle="green" //Màu sắc của phần thưởng
        ctx.fillRect(reward.x,reward.y,25,25) // Vẽ phần thưởng
        console.log("Thuong X: "+reward.x)
        console.log("Thuong Y: "+reward.y)
    }

    function Right(){ // Hàm ấn nút rẽ phải
        clearInterval(LEFT);
        clearInterval(RIGHT);
        clearInterval(UP);
        clearInterval(DOWN);
        if(car.x+25<canvas.width){
            RIGHT = setInterval(startRight,delay);
        }
    }
    function Left(){  // Hàm ấn nút rẽ trái
        clearInterval(LEFT);
        clearInterval(RIGHT);
        clearInterval(UP);
        clearInterval(DOWN);
        if(car.x>0){
            LEFT = setInterval(startLeft,delay);
        }}
    function Up(){ // Hàm ấn nút đi lên
        clearInterval(LEFT);
        clearInterval(RIGHT);
        clearInterval(UP);
        clearInterval(DOWN);
        if(car.y>0){
            UP = setInterval(startUp,delay);
        }

    }
    function Down(){   // Hàm ấn nút đi xuống
        clearInterval(LEFT);
        clearInterval(RIGHT);
        clearInterval(UP);
        clearInterval(DOWN);
        if(car.y+25<canvas.height){
            DOWN = setInterval(startDown,delay);
        }

    }
    document.addEventListener("keydown", key => { //Sự kiện lắng nghe khi phím được nhấn từ bàn phím
        clearInterval(LEFT);  // Trước khi thực hiện hoạt động của phím thì xóa toàn tất cả setInterval
        clearInterval(RIGHT);
        clearInterval(UP);
        clearInterval(DOWN);
        switch(key.keyCode){ // Kiểm tra giá trị của mã phím để thực hiện hành động phím
            case 37: //Key điều khiển xe sang trái
                if(car.x>0){ //Điều kiện kiểm tra xem có nằm trong khung hình canvas không
                    LEFT = setInterval(startLeft,delay);
                }
                break;
            case 38: //Key điều khiển xe đi lên
                if(car.y>0){ //Điều kiện kiểm tra xem có nằm trong khung hình canvas không
                    UP = setInterval(startUp,delay);
                }
                break;
            case 39: // Key điều khiển xe sang phải
                if(car.x+70<canvas.width){ //Điều kiện kiểm tra xem có nằm trong khung hình canvas không
                    RIGHT = setInterval(startRight,delay);
                }
                break;
            case 40: // Key điều khiển xe đi xuống
                if(car.y+70<canvas.height){ //Điều kiện kiểm tra xem có nằm trong khung hình canvas không
                    DOWN = setInterval(startDown,delay);
                }
                break;
            case 17:{
                Speed()
            }
        }

    })