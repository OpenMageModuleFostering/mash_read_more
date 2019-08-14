<?php 

class Mash_ReadMore_Model_Category extends Mage_Catalog_Model_Category{
	
	public function getReadAttr(){
		
	return $this->getReadmoreAttribute();
		
	}
	
}