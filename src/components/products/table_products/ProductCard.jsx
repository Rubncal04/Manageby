import { Table } from '@nextui-org/react';
import { Card } from '@nextui-org/react';
import { NewProductButton } from '../../services/NewProductButton';


function AllProducts({products}) {
  return (
    <Card css={{ backgroundColor: "#283747" }}>
      <Card.Body>
        <Table
          headerLined
          shadow={false}
          aria-label="Example table with static content"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header>
            <Table.Column></Table.Column>
            <Table.Column css={{
              fontSize: '30px',
              color: '$accents3'
            }}>
              Code
            </Table.Column>
            <Table.Column css={{
              fontSize: '30px',
              color: '$accents3'
            }}>
              Name
            </Table.Column>
            <Table.Column css={{
              fontSize: '30px',
              color: '$accents3'
            }}>
              Stock
            </Table.Column>
          </Table.Header>
          <Table.Body>
            {
              products.map((product, index) => (
                <Table.Row key={product.id}>
                  <Table.Cell css={{
                    fontSize: "20px",
                    color: "$white"
                  }}>
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell css={{
                    fontSize: "20px",
                    color: "$white"
                  }}>
                    {product.code}
                  </Table.Cell>
                  <Table.Cell css={{
                    fontSize: "20px",
                    color: "$white"
                  }}>{ product.name }</Table.Cell>
                  <Table.Cell css={{
                    fontSize: "20px",
                    color: "$white"
                  }}>{ product.stock_quantity }</Table.Cell>
                </Table.Row>
              ))
            }
          </Table.Body>
        </Table>
      </Card.Body>
      <Card.Footer>
        <NewProductButton textButton='Add product' linkTo='/new-product'/>
      </Card.Footer>
    </Card>
  );
}

export { AllProducts }
