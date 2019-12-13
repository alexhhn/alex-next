function Layout(props:any) {
  return (
    <div className="page-layout">
      <h1>Global header</h1>
      <div className="page-content">{props.children}</div>
    </div>
  );
}

export default Layout;
