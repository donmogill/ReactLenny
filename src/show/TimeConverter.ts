
export default function TimeConverter(rawTime:string) {
  //const rawTime = "21:00:00";
  
  // Create a dummy date with your time string
  const formattedTime = new Date(`1970-01-01T${rawTime}`).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).toLowerCase().replace(' ', ''); // Converts "9:00 PM" to "9:00pm"

  // To strictly remove minutes if they are zero (to get exactly "9pm")
  const finalTime = formattedTime.replace(':00', '');

  return (finalTime);
}