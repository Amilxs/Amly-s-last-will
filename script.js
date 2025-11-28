body {
  margin: 0;
  font-family: sans-serif;
  background: #111;
  color: white;
}

.section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
}

.reveal-text {
  font-size: 1.5rem;
  line-height: 2rem;
}

.reveal-text span {
  display: inline-block;
  opacity: 0;
  transform: translateY(-50px);
  transition: 0.4s ease;
}

.reveal-text span.visible {
  opacity: 1;
  transform: translateY(0);
}
