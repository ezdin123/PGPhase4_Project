package yenatLounge.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import yenatLounge.exception.ProductNotFoundException;
import yenatLounge.model.Product;
import yenatLounge.repository.ProductRepository;

 

@Service
public class ProductService {
	@Autowired
	private ProductRepository productrepository;

	// Get All Products
	public List<Product> geAllMyProducts() {
		return productrepository.findAll();

	}

	// Add a Product
	public Product addMyProduct(Product prod) {
		return productrepository.save(prod);
	}

	// Find Products by Cusine
	public List<Product> getProductbyMyCusine(String cusine) {
		return productrepository.findByCusine(cusine);
	}

	// Update a Product
	public Product updateMyProduct(Product prod) {

		// Step 1: find product
		Product findProduct = this.productrepository.findById(prod.getP_id()).orElseThrow(() -> {
			throw new ProductNotFoundException("Product Not Found with id " + prod.getP_id());
		});

		// Step2: Set new values
		findProduct.setCusine(prod.getCusine());
		findProduct.setName(prod.getName());
		findProduct.setDesc(prod.getDesc());
		findProduct.setPrice(prod.getPrice());

		// Save Product
		return this.productrepository.save(findProduct);
	}

	// Update a Product
	public Product updateMyProductById(Product prod) {

		prod.setCusine(prod.getCusine());
		prod.setName(prod.getName());
		prod.setDesc(prod.getDesc());
		prod.setPrice(prod.getPrice());

		// Save Product
		return this.productrepository.save(prod);
	}

	// Delete a Product by Id
	public String deleteMyProductById(Long p_id) {

		// Find product
		Product ProducttoDelete = this.productrepository.findById(p_id).orElseThrow(() -> {
			throw new ProductNotFoundException("Product Not Found with id" + p_id);
		});

		this.productrepository.delete(ProducttoDelete);
		return "Product is successfully deleted for " + p_id;
	}

	public Product getOneMyProduct(Long p_id) {
		return productrepository.findById(p_id).orElse(null);

	}
}