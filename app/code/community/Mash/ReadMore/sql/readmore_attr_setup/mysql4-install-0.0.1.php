<?php
$this->startSetup();
$this->addAttribute('catalog_category', 'readmore_attribute', array(
    'group'         => 'General Information',
    'input'             => 'select',
    'type'          => 'int',
    'label'         => 'Disable Auto Readmore ',
    'backend'       => '',
    'visible'           => true,
    'required'          => false,
    'user_defined'      => false,
    'default'           => '0',
    'searchable'        => false,
    'filterable'        => false,
    'comparable'        => false,
    'visible_on_front'  => false,
    'source'            => 'eav/entity_attribute_source_boolean',
    'unique'            => false,
    'global'        => Mage_Catalog_Model_Resource_Eav_Attribute::SCOPE_GLOBAL
));
 
$this->endSetup();
  