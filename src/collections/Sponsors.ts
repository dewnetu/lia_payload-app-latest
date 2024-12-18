import type { CollectionConfig } from 'payload'

const Sponsors: CollectionConfig = {
  slug: 'sponsors',
  admin: {
    useAsTitle: 'firstName',
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
    },  
    {
      name: 'address',
      type: 'text',
    },
    {
      name: 'city',
      type: 'text',
    },
    {
      name: 'postalCode',
      type: 'text',
    },
    {
      name: 'country',
      type: 'text',
    },
    {
      name: 'region',
      type: 'text',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'sponsee',
      type: 'relationship',
      relationTo: 'sponsees',
      hasMany: true,
    },
  ],
};

export default Sponsors;
