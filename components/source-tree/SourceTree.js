import styled from "styled-components";
import FolderIcon from  "public/icons/folder-icon.png";

const Item = ({name: string}) => (
    <>
      <p><strong><img src={FolderIcon}/></strong> Placeholder</p>
    </>
)

const SourceTree = () => (
    <Container>
        <Item name="hei"/>
        <Item name="hei"/>
        <Item name="hei"/>
        <Item name="hei"/>
        <Item name="hei"/>
    </Container>    
)

const Container = styled.div`
    display: flex;
    flex-direction: column;
    p {
        font-size: 18px;
    }
`

export default SourceTree;