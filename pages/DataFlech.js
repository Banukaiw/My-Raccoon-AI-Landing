import MyDataComponent from "../components/MyDataComponent";
function DataFlech({ val }) {
  return <MyDataComponent data={val} />
  ;
}

export async function getServerSideProps(context) {
  const val = context.query.val; // extract the value of the 'val' query parameter
  return {
    props: { val },
  };
}

export default DataFlech;
