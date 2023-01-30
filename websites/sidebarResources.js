module.exports = {
  mySidebar: [
    'intro',
    {
      type: 'category',
      label: 'Models',
      items: [
        {
          type:'autogenerated',
          dirName: 'Models',
        }
      ],
    },
    {
      type: 'category',
      label: 'OMOP',
      items: [
        'OMOP/Introduction',
        'OMOP/Mapping',
      ],
    },
  ],
  
  mappingSidebar: [
    'OMOP/Mapping',
    {
      type: 'category',
      label: 'IC3 Customizd Mapping',
      items: [
        {
          type:'autogenerated',
          dirName: 'OMOP/CustomizedMapping',
        }
      ],
    },
    
  ]
};

