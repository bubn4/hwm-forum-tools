export default `
  #tools-main {
    display: inline-block;
    margin-right: 30px;
    padding: 5px;
    color: #592C08;
    position: relative;
  }

  #tools-counter-link {
    display: inline;
    cursor: pointer;
    margin-right: 2px;
  }

  #tools-counter-number {
    display: inline-block;
  }

  .newMessage {
    border-left: 3px solid #007fff;
  }

  .newPage {
    background-color: rgba(0,127,255, .3);
  }

  .spinner {
    position: relative;
    display: inline-block;
    width: 13px;
    height: 13px; 
    position: absolute;
    top: 3px;
    right: -3px;
  }
  .spinner .spinner-blade {
    position: absolute;
    top: 6.5px;
    left: 3.5px;
    width: 2.5px;
    height: 5.5px;
    background-color: #8e8e93;
    border-radius: 1.25px;
    animation: SpinnerBlade 1s linear infinite;
    will-change: opacity; }
    .spinner .spinner-blade:nth-child(1) {
      transform: rotate(45deg) translateY(-6.5px);
      animation-delay: -1.625s; }
    .spinner .spinner-blade:nth-child(2) {
      transform: rotate(90deg) translateY(-6.5px);
      animation-delay: -1.5s; }
    .spinner .spinner-blade:nth-child(3) {
      transform: rotate(135deg) translateY(-6.5px);
      animation-delay: -1.375s; }
    .spinner .spinner-blade:nth-child(4) {
      transform: rotate(180deg) translateY(-6.5px);
      animation-delay: -1.25s; }
    .spinner .spinner-blade:nth-child(5) {
      transform: rotate(225deg) translateY(-6.5px);
      animation-delay: -1.125s; }
    .spinner .spinner-blade:nth-child(6) {
      transform: rotate(270deg) translateY(-6.5px);
      animation-delay: -1s; }
    .spinner .spinner-blade:nth-child(7) {
      transform: rotate(315deg) translateY(-6.5px);
      animation-delay: -0.875s; }
    .spinner .spinner-blade:nth-child(8) {
      transform: rotate(360deg) translateY(-6.5px);
      animation-delay: -0.75s; }

@keyframes SpinnerBlade {
  0% {
    opacity: 0.85; }
  50% {
    opacity: 0.25; }
  100% {
    opacity: 0.25; } }

`;
