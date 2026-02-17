.slider {
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: 1s ease;
}

.slide.active {
  opacity: 1;
}

/* Content Box */
.slide-content {
  position: absolute;
  left: 10%;
  top: 30%;
  color: white;
  background: rgba(0,0,0,0.4);
  padding: 20px;
  border-radius: 10px;
}

.slide-content h2 {
  font-size: 30px;
}

.slide-content p {
  font-size: 16px;
  margin: 10px 0;
}

.slide-content button {
  background: #e63946;
  color: white;
  padding: 8px 20px;
  border-radius: 5px;
  font-weight: bold;
}

/* Dots */
.dots {
  position: absolute;
  bottom: 15px;
  width: 100%;
  text-align: center;
}

.dot {
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
  opacity: 0.5;
  cursor: pointer;
}

.dot.active {
  opacity: 1;
  background: #e63946;
}
