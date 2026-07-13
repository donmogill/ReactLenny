
export default function DateConverter(incomingDate:string) {

  const date = new Date(`${incomingDate}T12:00:00-00:00`);

  return (date.toLocaleDateString('en-US'));
}